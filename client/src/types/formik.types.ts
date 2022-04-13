import React from "react";

export interface HandleBlurType {
	(e: React.FocusEvent<any, Element>): void;
	<T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
}

export interface HandleChangeType {
	(e: React.ChangeEvent<any>): void;
	<T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
}
