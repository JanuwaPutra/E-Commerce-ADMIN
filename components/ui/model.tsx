

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";

interface ModalProps    {
    title : string ;
    description : string;
    isOpen : boolean;
    onClose: ()=> void;
    children?: React.ReactNode
}
const Modal = ({title,description, isOpen, onClose, children} : ModalProps) =>{

    
   const onChange = (open: boolean) =>{
    if(!open){
        onClose()
    }
}
return (
    <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    {title}
                </DialogTitle>
                {description}
            </DialogHeader>
            <div>{children}</div>
        </DialogContent>
    </Dialog>
)
}
export default Modal