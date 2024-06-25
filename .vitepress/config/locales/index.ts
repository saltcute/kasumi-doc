import { DefaultTheme, LocaleConfig } from "vitepress";
import enCA from "./en-ca";
import zhCN from "./zh-cn";
import zhTW from "./zh-tw";

export default () => {
    return {
        "en-ca": enCA,
        "zh-cn": zhCN,
        "zh-tw": zhTW
    } as LocaleConfig<DefaultTheme.Config>;
}