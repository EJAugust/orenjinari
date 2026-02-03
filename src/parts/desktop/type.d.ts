declare interface IDesktop
 extends IPartsApplication {

 // Subparts.
 readonly color: IColor
 readonly era: IEra
 readonly taskBar: ITaskBar
}

declare const desktop: IDesktop