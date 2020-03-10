# OCTOPLUS

## Install
```
npm i
```

## Run
To develop:
```
npm start
```

## Deploy
To deploy:
```
npm run build
```

## Vue specificity

### Access texts locals

Every vue object inherit from the `texts` variable (mixin) which contain the `JSON` of the local in the browser language.

### One ref for multiple elements

Vue allow a `ref` to become an `Array` in a `v-for` loop but not outise a loop.
To store many refs in an `Array` outside a `v-for` use `v-multi-ref:refName`.