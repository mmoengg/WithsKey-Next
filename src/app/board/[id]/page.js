
import BoardCard from '@/components/board/BoardCard'

const BOARD_LIST = [
    {
        id: 1,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 2,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 3,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 4,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    }
]
 
export default function Board() {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-start bg-gray-200">
            <div className="w-full max-w-[1280px] mt-[60px] py-[40px] px-4">
                <div className="w-full pb-6 flex gap-12 items-center justify-end">
                    <button type="button" className="px-6 py-3 rounded-md bg-black text-white">글쓰기</button>
                    <button type="button" className="w-13 h-13 rounded-full bg-white">?</button>
                </div>
                <ul className="w-full flex flex-wrap items-center justify-center gap-8">
                    {BOARD_LIST.map((board) => (
                        <BoardCard
                            key={board.id}
                            id={board.id}
                            name={board.userName}
                            image={board.image_url}
                            title={board.title}
                            content={board.content}
                            like={board.likeCount}
                            comment={board.commentCount}
                            createdAt={board.created_at}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}