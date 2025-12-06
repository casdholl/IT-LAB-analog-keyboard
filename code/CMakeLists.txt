cmake_minimum_required(VERSION 3.13)

# initialize the SDK based on PICO_SDK_PATH
# note: this must happen before project()
include(include/pico-sdk/pico_sdk_init.cmake)

project(analog_keyboard)

# initialize the Raspberry Pi Pico SDK
pico_sdk_init()

# rest of your project
add_executable(analog_keyboard
    main.c
)

# Add pico_stdlib library which aggregates commonly used features
target_link_libraries(analog_keyboard pico_stdlib)

# create map/bin/hex/uf2 file in addition to ELF.
pico_add_extra_outputs(analog_keyboard)
