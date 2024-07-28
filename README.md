# NH8CHIR

This extension allows you to interface with the ADS7828 ADC using the micro:bit.

## Blocks

### Initialize

Initialize the I2C device with the specified address.

### Read

Read the ADC value from the specified channel.

## Example Usage

```blocks
NH8CHIR.initialize(I2CAddress.addr48);
let value = NH8CHIR.read(Channels.channel_0);
