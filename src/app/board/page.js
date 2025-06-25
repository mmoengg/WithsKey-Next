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
    },{
        id: 5,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 6,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 7,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 8,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 9,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
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
    },{
        id: 5,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 6,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 7,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 8,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 9,
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
        <section className="w-full h-auto min-h-base text-surface">
            <div className="w-full h-[55px] border-b-base flex items-center justify-end">
                <button type="button" className="w-[67px] h-full border-l-base hover:bg-primary transition duration-200 cursor-pointer">?</button>
                <button type="button" className="w-[67px] h-full border-l-base hover:bg-primary transition duration-200 cursor-pointer">+</button>
            </div>
            <ul className="w-full h-full flex flex-wrap">
                {BOARD_LIST.map((board, idx) => (
                    <BoardCard
                        key={board.id}
                        idx={idx}
                        total={BOARD_LIST.length}
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
        </section>
    )
}