interface LeaveReq {
    userId: number;
    leaveTypeId: number;
    startTime: string;
    startLeaveDayType: string;
    endTime?: string;
    endLeaveDayType?: string;
    leaveDuration: number;
    leaveReason: string;
    remark: string;
}

interface Duration {
    startTime: string;
    startLeaveDayType: string;
    endTime?: string | undefined;
    endLeaveDayType?: string;
}

export type LoginType = {
    username: string;
    password: string;
}