
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
    }
]

export default function BoardDetailPages() {
    return (
        <section className="w-full h-base p-4 flex flex-col">
            <h1 className="text-2xl font-bold mb-4">게시판</h1>
            <p>본문</p>
            <div>
                3
            </div>
        </section>
    )
}

