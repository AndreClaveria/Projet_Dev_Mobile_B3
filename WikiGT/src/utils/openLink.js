import { Linking } from "react-native";

export const openLink = (link) => {
  Linking.openURL(link)
}