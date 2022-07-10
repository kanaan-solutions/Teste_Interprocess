import {
    FormEvent,
    ChangeEventHandler,
    MouseEventHandler,
    RefObject
} from "react";

export interface IPatient {
    id: number
    name: string;
    birthDate: string;
    cpf: string;
    gender: string;
    address: string;
    status: string;
}

export interface IButtonProps {
    title: string;
    type: "button" | "submit" | "reset";
    onClick: (e: FormEvent) => void
}

export interface IInputProps {
    legend?: string;
    type: string;
    value: string;
    optionOne?: string;
    optionTwo?: string;
    placeholder?: string;
    ref?: RefObject<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onClickOne?: MouseEventHandler<HTMLInputElement>
    onClickTwo?: MouseEventHandler<HTMLInputElement>
}

export interface IPageHeaderProps {
    title?: string;
    arrow?: boolean;
}

export interface IPageTitleProps {
    title: string;
}

export interface IPatientCardProps {
    id: number;
    name: string;
    birthDate?: string;
    cpf?: string;
    gender?: string;
    address?: string;
    status?: string;
}
