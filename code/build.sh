#!/bin/sh

# Variabelen
PICO_SDK=../include/pico-sdk
PICO_BOARD=pico2

mkdir -p build
cd build
cmake -DPICO_SDK_PATH="${PICO_SDK}" -DPICO_BOARD="${PICO_BOARD}" ..
make analog_keyboard
