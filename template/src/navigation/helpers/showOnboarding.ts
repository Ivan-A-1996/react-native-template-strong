import {IDatePickerProps} from "../../common/components/DatePickerOverlay";
import {Pages} from "../pages";
import {Layout, Navigation} from "react-native-navigation";
import {isIos} from "../../core/theme/commonConsts";

export function showOnboarding() {
  if (isIos) {
    const data: Layout<IDatePickerProps> = {
      component: {
        name: Pages.onboarding.name,
        id: Pages.onboarding.id,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    };

    Navigation.showModal({
      stack: {
        children: [data],
      },
    });
  }
}
