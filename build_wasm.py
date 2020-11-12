#!/usr/bin/python
import argparse
import os
import sys
import subprocess


TAG_WIDTH = 20
TAG_FORMAT = "%-" + str(TAG_WIDTH) + "s| %s"


def log_msg(tag, msg):
    if tag is None:
        out = msg
    else:
        out = TAG_FORMAT % (tag, msg)
    print(out)


def execute_cmdline(cmd, working_dir):
    p = subprocess.Popen(cmd, shell=True, cwd=working_dir)
    res = p.wait()
    (out, err) = p.communicate()

    if (res != 0):
        log_msg("Error", "Cmd execution failed")
        log_msg(None, "")
        log_msg("Error - Cmd", cmd)
        log_msg("Error - Res", "%d" % (res))
        log_msg("Error - Out", out)
        log_msg("Error - Err", err)

    return (res, "Empty" if (out is None) or (len(out) == 0) else out.rstrip(), "Empty" if (err is None) or (len(err) == 0) else err.rstrip())


def configure():
    configure_cmd = ("cmake -DCMAKE_TOOLCHAIN_FILE=cmake/Emscripten.cmake " +
                     "-DCMAKE_BUILD_TYPE=Release " +
                     "-Hcontainers_wasm -B build " +
                     "-GNinja")

    print('Configuring...')
    res = execute_cmdline(configure_cmd, os.getcwd())

    if res[0] != 0:
        log_msg("Error", "Failed to execute CMake command")
        return res[0]

    return 0


def build():
    build_cmd = "cmake --build build --config Release --target all -- -j 10"

    print('Building...')
    res = execute_cmdline(build_cmd, os.getcwd())

    if res[0] != 0:
        log_msg("Error", "Failed to execute CMake command")
        return res[0]

    return 0


def compile(input_files, output_file):
    emcc_args = [
        '--llvm-opts', '3',
        '-O3',
        '--bind',
        '-s', 'MODULARIZE=1',
        '-s', 'EXPORT_NAME=containersModule',
        '-s', 'ENVIRONMENT="web,worker,node"',
        '-s', 'DEMANGLE_SUPPORT=1',
        '-s', 'INITIAL_MEMORY=32mb',
        '-s', 'ALLOW_MEMORY_GROWTH=1']

    build_cmd = "$EMSCRIPTEN/em++ " + \
        " ".join(emcc_args) + " " + " ".join(input_files) + " -o " + output_file

    print(f'em++ {input_files} -> {output_file}')
    res = execute_cmdline(build_cmd, os.getcwd())

    if res[0] != 0:
        log_msg("Error", "Failed to execute CMake command")
        return res[0]

    return 0


def main():
    arg_parser = argparse.ArgumentParser(
        description="Build Containers to WASM")
    arg_parser.add_argument("-i", "--input", required=True,
                            type=str, nargs="+", help="Compiled object.")
    arg_parser.add_argument("-o", "--output", required=True,
                            type=str, help="Ouput file.")
    args = arg_parser.parse_args()

    log_msg(None, "")
    log_msg("Input files", args.input)
    log_msg("Output file", args.output)

    log_msg(None, "")

    if configure() != 0:
        return -1

    if build() != 0:
        return -1

    if compile(args.input, args.output):
        return -1

    return 0


if __name__ == "__main__":
    sys.exit(main())
