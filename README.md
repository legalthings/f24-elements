![elements](./docs/elements.png?raw=true)

# f24 Elementƨ

This is f24 elements, everything you need for a vue project with Firm24 branding.

Includes:
    
* Buefy / Bulma
* Validation and i18n validation messages (nl/en) (check [vee-validate](https://github.com/logaretm/vee-validate))
* Custom f24 components
    * Input fields
    * Icon (+ svg icons)
    * Header
    * Language selector
* SCSS
    * Mixins
    * Font types
    * Firm24 default styles

## Requirements
This vue plugin requires your project to have installed:
 * [Buefy](https://github.com/buefy/buefy)
 * [vue-i18n](https://github.com/kazupon/vue-i18n)

## Installation
```
npm i legalthings/f24-elements --save
```

### Configuration

On main.ts use:

``` javascript
import VueI18n from 'vue-i18n';
import Buefy from 'buefy';
import f24Elements from 'f24-elements';

Vue.use(Buefy);
Vue.use(VueI18n);
const i18n = new VueI18n();
Vue.use(f24Elements, i18n);

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
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
                :name="inputText"
                rules="required|min_value:1"
                placeholder="Type something here..."
                tooltip="This will be inside the tooltip box"
            />
    </ValidationObserver>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { UiInputText } from 'f24-elements';

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
