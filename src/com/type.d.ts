declare interface ICom
 extends ITopLevelDomain<IComApplication> {

 // Subparts.
 readonly orenjinari: IOrenjinari
}

declare type IComApplication =
 IApplication<ICom, IPart<IComApplication, IPartAny>>