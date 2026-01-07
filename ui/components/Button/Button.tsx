import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    PropsWithChildren,
    useMemo,
} from 'react';
import styles from './Button.module.css';
import clsx, { ClassArray } from 'clsx';
import Link, { LinkProps } from 'next/link';

type CustomButtonProps = Partial<{
    variant: 'primary' | 'secondary' | 'ghost';
    size: 'sm' | 'md' | 'lg';
    fullWidth: boolean;
}>;

type HtmlButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

type HtmlAnchorProps = DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>;

type AsButtonProps = CustomButtonProps &
    Omit<HtmlButtonProps, 'size'> & {
        as?: 'button';
    };

type AsAnchorProps = CustomButtonProps & Omit<HtmlAnchorProps, 'size'> & { as?: 'anchor' };

type AsLinkProps = PropsWithChildren<CustomButtonProps & LinkProps & { as?: 'link' }>;

export type ButtonProps = AsButtonProps | AsAnchorProps | AsLinkProps;

export default function Button({
    as = 'button',
    variant = 'primary',
    size = 'md',
    fullWidth,
    children,
    ...props
}: ButtonProps) {
    const isLink = useMemo(() => as === 'link', [as]);
    const isAnchor = useMemo(() => as === 'anchor', [as]);

    const classNames = clsx(
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth
    );

    if (isAnchor)
        return (
            <a className={classNames} {...(props as AsAnchorProps)}>
                {children}
            </a>
        );
    else if (isLink)
        return (
            <Link className={classNames} {...(props as AsLinkProps)}>
                {children}
            </Link>
        );
    else
        return (
            <button className={classNames} {...(props as HtmlButtonProps)}>
                {children}
            </button>
        );
}
