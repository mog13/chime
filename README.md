# Chime
Small JS library using the audio API for basic bleeps and bloops 🤖🎤


include in your HTML via script:

`<script src="./path/to/chime.js"></script>`

`<script src="https://unpkg.com/@mog13/chime"></script>`


#### `PlayNote(frequency,duration,volume,type)`
Plays a sound with the given frequency,volume, type for the duration.

_frequency_: int 0-MAX

_duration_: int 0-MAX - (seconds)

_volume_: float 0-1

_type_: ["sine","square","triangle","sawtooth"]

**Defaults** Defaults are used when not specified. You can change the defaults via Chime.default[parameter]


 
#### `PlaySine(frequency,duration,volume)`
Syntactic sugar for `PlayNote` with the type set to "Sine"
#### `PlaySquare(frequency,duration,volume)`
Syntactic sugar for `PlayNote` with the type set to "square"
#### `PlayTriangle(frequency,duration,volume)`
Syntactic sugar for `PlayNote` with the type set to "triangle"
#### `PlaySawtooth(frequency,duration,volume)`
Syntactic sugar for `PlayNote` with the type set to "sawtooth"
 

## Dev
contributions welcome. 

`npm run build` to build