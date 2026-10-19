import { QuartzPageTypePluginInstance } from "@quartz-community/types"
import FolderGrid from "./FolderGrid"

export default (opts?: any): QuartzPageTypePluginInstance => {
  return {
    name: "FolderGridLanding",
    priority: 100,
    match: ({ slug }) => slug === "index" || slug === "",
    layout: "landing",
    frame: "minimal",
    body: () => FolderGrid(opts),
  }
}
