import Taro from '@tarojs/taro';
import { Language } from '@/common/enums/language';
import { flow, makeAutoObservable } from 'mobx';

export class UiStore {
  /**
   * 屏幕宽度
   */
  screenWidth = 0;

  /**
   * 屏幕高度
   */
  screenHeight = 0;

  /**
   * 窗体宽度
   */
  windowWidth = 0;

  /**
   * 窗体高度
   */
  windowHeight = 0;

  /**
   * 状态栏高度
   */
  statusBarHeight = 0;

  /**
   * 导航栏高度
   */
  navBarHeight = 60;

  /**
   * 设备品牌
   */
  brand = '';

  /**
   * 用户语言，用于后期实现 i18n
   */
  language = Language.ZhCn;

  /**
   * 当前运行环境
   */
  taroEnv: Taro.ENV_TYPE;

  constructor() {
    makeAutoObservable(this);
    this.loadSystemInfo();
    Taro.onWindowResize((size: any) => {
      this.setWindowSize(size.windowWidth, size.windowHeight);
    });
  }

  /**
   * 当前是否是 Web 端
   */
  get isWeb() {
    return this.taroEnv === Taro.ENV_TYPE.WEB;
  }

  /**
   * 当前运行环境是否是小程序
   */
  get isMini() {
    return (
      this.taroEnv !== Taro.ENV_TYPE.WEB && this.taroEnv !== Taro.ENV_TYPE.RN
    );
  }

  setScreenSize(width: number, height: number) {
    this.screenWidth = width;
    this.screenHeight = height;
  }

  setWindowSize(width: number, height: number) {
    this.windowWidth = width;
    this.windowHeight = height;
  }

  setStatusBarHeight(height: number) {
    this.statusBarHeight = height;
  }

  setBrand(brand: string) {
    this.brand = brand;
  }

  setLanguage(language: Language) {
    this.language = language;
  }

  loadTaroEnv() {
    const taroEnv = Taro.getEnv();
    this.taroEnv = taroEnv;
  }

  loadSystemInfo = flow(function* loadSystemInfo(this: UiStore) {
    const systemInfo: Taro.getSystemInfo.Result = yield Taro.getSystemInfo();
    this.setScreenSize(systemInfo.screenWidth, systemInfo.screenHeight);
    this.setWindowSize(systemInfo.windowWidth, systemInfo.windowHeight);
    this.setStatusBarHeight(systemInfo.statusBarHeight);
    this.setBrand(systemInfo.brand);
  });
}
