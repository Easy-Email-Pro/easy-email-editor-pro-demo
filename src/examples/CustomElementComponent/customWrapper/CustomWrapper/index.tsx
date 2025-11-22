import React from "react";
import { EditorCore, ElementType, WrapperElement } from "easy-email-pro-core";
import {
  BaseElementProps,
  ElementMap,
  MJMLElementRender,
} from "easy-email-pro-editor";
import { extraContent } from "..";

const CustomWrapper: React.FC<
  Omit<BaseElementProps<WrapperElement>, "attributes"> & {
    attributes?: BaseElementProps<WrapperElement>["attributes"] | undefined;
  }
> = (props) => {
  const Wrapper = ElementMap[ElementType.WRAPPER]!;
  const mjml = EditorCore.elementComponentToMjml(extraContent, {
    pageElement: props.context,
    mode: "testing",
    keepEmptyAttributes: true,
    displayMode: props.isMobileActive ? "only-mobile" : "only-desktop",
  });
  return (
    <Wrapper {...props}>
      <MJMLElementRender
        context={props.context}
        mjmlString={mjml}
        isMobileActive={props.isMobileActive}
      />

      {props.children}
      {props.placeholder}
    </Wrapper>
  );
};
export { CustomWrapper };
