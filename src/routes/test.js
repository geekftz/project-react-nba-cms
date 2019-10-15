import React, { PropsWithChildren } from 'react';

export interface HelloProps {
  name: string;
}

// 直接使用函数参数声明
// PropsWithChildren只是扩展了children, 完全可以自己声明
// type PropsWithChildren<P> = P & {
//    children?: ReactNode;
// }
export const Hello = ({ name }: PropsWithChildren<HelloProps>) => <div>Hello {name}!</div>;

Hello.defaultProps = { name: 'TJ' };
