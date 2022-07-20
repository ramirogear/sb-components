/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label?: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Para saber si la etiqueta es en mayusculas
     */
    allCaps?: boolean;
    /**
    * Color de la etiqueta
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
   * Color personlizado de la fuente
   */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: Props) => JSX.Element;
