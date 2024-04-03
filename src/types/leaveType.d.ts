interface LeaveType {
    data: Type[];
    total: number;
}

interface Type {
    id: number;
    name: string;
    nameLocal: string;
    description: string;
    icon: string;
    colour: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: any;
}