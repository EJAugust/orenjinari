declare interface IVintageBodyMode
 extends IBodyMode<IEra> {

 // Serialized Properties.
 /** An decorative title that uses unicode bold and mathematical characters to render the current application's host name. */
 readonly "fancyTitle"?: string
}

declare const vintageMode: IVintageBodyMode