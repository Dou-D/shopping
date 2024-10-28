export interface FormType {
    username: string;
    password: string
}

/**
 * 登录方式
 */
export interface LoginFormProps {
    type: "message" | "password"
}