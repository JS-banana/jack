import { PluginFunction } from 'vue'

type AhComponents = PluginFunction<any>

declare const components: AhComponents
export default components
export as namespace components
