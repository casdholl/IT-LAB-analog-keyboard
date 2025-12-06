# Analog Keyboard Code

## Voorbereiden

```shell
sudo pacman -S cmake arm-none-eabi-gcc arm-none-eabi-newlib
```

## Bouwen

```shell
cd code
./build.sh
```

In de build map krijg je dan het volgende:
- `analog_keyboard.elf` om te debuggen
- `analog_keyboard.uf2` om te flashen op de pico via drag en drop.

[Zie raspberrypi pico-sdk docs](https://www.raspberrypi.com/documentation/microcontrollers/c_sdk.html)
