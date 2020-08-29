![elements](./docs/elements.png?raw=true)

# f24 Elements

This is Firm24 elements, everything you need for a vue project with Firm24 branding

Includes:
    
* Buefy / Bulma
* Validation and i18n validation messages (nl/en)
* Custom f24 components
    * Input fields
    * Icon (Icon packages)
* SCSS
    * Mixins
    * Font types
    * Firm24 default styles

## Requirements
This vue plugin requires your project to have installed [vue-i18n](https://github.com/kazupon/vue-i18n)
Also implements [vee-validate](https://github.com/logaretm/vee-validate), please check the documentation

## Installation
```
npm i legalthings/f24-elements --save
```

### Configuration

On main.ts use:

```
import f24Elements from 'f24-elements';
const i18n = new VueI18n();
Vue.use(f24Elements, i18n);
```

### Usage
``` vue
<template>
    <div>
        <ValidationObserver
            ref="observer"
            v-slot="validator"
            tag="form"
        >
            <UiInputText
                v-model="input"
                label="This is the label"
            />
    </ValidationObserver?
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { UiInputDatepicker, UiInputText, UiInputSelectbox } from 'f24-elements';

    @Component({
        components: {
            UiInputText
        }
    })
    export default class MyComponent extends Vue {
        input = null;
    }
</script>

```
