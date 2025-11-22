import { ConfigPanelsMap } from "easy-email-pro-theme";
import { ElementType } from "easy-email-pro-core";

import { Text } from "./Text";
import { Button } from "./Button";

ConfigPanelsMap[ElementType.STANDARD_H1] = Text;
ConfigPanelsMap[ElementType.STANDARD_H2] = Text;
ConfigPanelsMap[ElementType.STANDARD_H3] = Text;
ConfigPanelsMap[ElementType.STANDARD_H4] = Text;
ConfigPanelsMap[ElementType.STANDARD_PARAGRAPH] = Text;

ConfigPanelsMap[ElementType.STANDARD_BUTTON] = Button;
