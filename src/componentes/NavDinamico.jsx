
export default function NavDinamico({className, children, testId=null}){
    return <div className={className} data-testid = {testId}>
        {children}
    </div>
}

