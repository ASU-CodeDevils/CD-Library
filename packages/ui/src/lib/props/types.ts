import React, { PropsWithChildren, PropsWithRef } from "react";

/** A type a component can be rendered as. */
export type As = keyof JSX.IntrinsicElements;

/** Represents the props required for rendering as. */
export interface AsProps {
    /** A type a component can be rendered as. */
    as?: As;
}

/** Represents the props required for class names. */
export interface ClassNameProps {
    /** Additional class names. */
    className?: string;
}

/** Represents the props required for children. */
export interface ChildrenProps {
    /** React children node. */
    children?: React.ReactNode;
}

/** Components including the `as` prop. */
export type ComponentWithAs<TComponentProps = {}> = React.FC<TComponentProps> & AsProps;

/** Components including the `className` prop. */
export type ComponentWithClassName<TComponentProps = {}> = TComponentProps & ClassNameProps;

/** Components including props comprising a majority of custom components. */
export type BaseComponent<TComponentProps = {}> = PropsWithRef<PropsWithChildren<TComponentProps & ClassNameProps & AsProps>>;

/** Components with the base component props save `as`. */
export type BaseComponentWithoutAs<TComponentProps = {}> = PropsWithRef<PropsWithChildren<TComponentProps & ClassNameProps>>;
