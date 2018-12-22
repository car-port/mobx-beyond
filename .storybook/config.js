import { configure, addDecorator} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'  // 这个插件是用来加载额外的文档信息的（md）
import '@storybook/addon-console' // 该插件可以直接打印console信息在logger pannel里

function loadStories() {
  require('../src/stories');
}

addDecorator(
  withInfo({

    header: false, // 展示info的头部
    source: false, // 是否展示源码
    inline: true, // 是点击切换展示info还是直接显示info
  })
);

configure(loadStories, module);

