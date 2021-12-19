type requestData = {
    action: string;
    [key: string]: string;
};

type ajaxResponse = {
    success: boolean;
    data: standardObject;
};

type standardObject = {
    [key: string]: string;
};
