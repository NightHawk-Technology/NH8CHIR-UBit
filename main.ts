enum I2CAddress {
    //% block="0x4A"
    addr4A = 0x4A,
    //% block="0x4B"
    addr4B = 0x4B,
    //% block="0x48"
    addr48 = 0x48,
    //% block="0x49"
    addr49 = 0x49
}

enum Channels {
    //% block="0"
    channel_0 = 0x00,
    //% block="1"
    channel_1 = 0x10,
    //% block="2"
    channel_2 = 0x20,
    //% block="3"
    channel_3 = 0x30,
    //% block="4"
    channel_4 = 0x40,
    //% block="5"
    channel_5 = 0x50,
    //% block="6"
    channel_6 = 0x60,
    //% block="7"
    channel_7 = 0x70
}

//% weight=100 color=#292929 icon="\uf0c1"
namespace NH8CHIR {
    let address: number;
    let ads_vref_int_enabled: boolean = false;

    //% blockId=initialize_i2c_device block="NH8CHIR Init %addr"
    export function initialize(addr: I2CAddress): void {
        address = addr;
    }

    //% blockId=readADC block="NH8CHIR read %ch"
    export function read(ch: Channels, mode: boolean = false): number {
        let command = ch;

        if (mode) {
            command ^= 0x80;
        }

        if (ads_vref_int_enabled) {
            command ^= 0x08;
        }
        pins.i2cWriteNumber(address, command, NumberFormat.UInt8BE);
        let rawData = pins.i2cReadNumber(address, NumberFormat.UInt16BE);
        let reading = (rawData >> 8) | ((rawData & 0xFF) << 8);

        return reading;
    }
}
