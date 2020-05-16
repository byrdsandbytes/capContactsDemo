# capContactsDemo

A Demo showing the usage of Capcitor Contacts Plugin. A native Capcitor plugin to manage phone contacts. Built for Angular hybrid apps.

![alt text](https://github.com/byrdsandbytes/capContactsDemo/raw/master/imgs/screenIOS.png "iOS Screenshot")
![alt text](https://github.com/byrdsandbytes/capContactsDemo/raw/master/imgs/screenPixel.png "Android Screenshot")


## Getting Started

### Usage

Clone the app:
``````
git clone https://github.com/byrdsandbytes/capContactsDemo.git
cd capContactsDemo
``````

Install dependencies:
``````
npm install
``````

build the App:
```
npx ionic build
```

Sync build to Android and ios Platforms
`````
npx cap sync
`````

open Xcode or Android Studio project

```
npx cap open ios 
npx cap open android
```



### Installing

Install:
```
npm i --save @byrds/capacitor-contacts
```
Sync:
````
ionic capacitor sync
````
Run iOS using livereload:
````
ionic capacitor run ios --l
````