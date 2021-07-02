import React, { useState , useEffect} from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import '../assets/css/pagination.css'
const Pagination = ({resNum, handleClick, depend, style}) => {
    const [page, setPage] = useState(0);
    const [pagesNum, setPagesNum] = useState(() => (resNum % 10 !== 0) ? parseInt(resNum / 10)+1 : parseInt(resNum / 10));
    const [pages, setPages] = useState(Array.from({length : pagesNum}, (_, i) => (page*10)+1+i))
    const resetPage = useEffect(() => {
        setPage(0)
    }, [depend])
    const resetPagesNum = useEffect(() => {
        setPagesNum(() => (resNum % 10 !== 0) ? parseInt(resNum / 10)+1 : parseInt(resNum / 10))
    }, [depend])
    const resetPages = useEffect(() => {
        setPages(Array.from({length : pagesNum}, (_, i) => (page*10)+1+i))
    }, [depend])
    useEffect(() => {
            setPages(Array.from({length : pagesNum}, (_, i) => page+1+i))
        }
    , [page, resNum, pagesNum])
    const next = () => {
        if(pagesNum % 10 !== 0){
            return;
        }
        const newPage = page+1;
        setPage(newPage);
    }

    const prev = () => {
        if(page !== 0){
            const newPage = page-1;
            setPage(newPage);
        }
    }
    
    return (
        <div className="pagination" style={style}>
            <div className="pagination__container">
                <div className="pagination-left">
                    <ChevronLeftIcon onClick={prev}/>
                </div>
                <div className="pages">
                    {pages.map((page, ind) => (
                        <span key={page} onClick={handleClick}>{page}</span>
                    ))}
                </div>
                <div className="pagination-right">
                    <ChevronRightIcon onClick={next}/>
                </div>
            </div>
        </div>
    )
}

export default Pagination