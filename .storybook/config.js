import { configure, addDecorator} from '@storybook/react';
import {withInfo} from '@storybook/addon-info'

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

