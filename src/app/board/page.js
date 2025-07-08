'use client';

import BoardCard from '@/components/board/BoardCard'

import { useEffect, useState } from "react";
import { supabase } from '@/utils/supabaseClient';
import Link from "next/link";


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
        id: 10,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 11,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 12,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 13,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 14,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 15,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 16,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 17,
        userName: '춘식이',
        image_url: '',
        title: '안녕하세요',
        content: '본문입니다',
        likeCount: 3,
        commentCount: 3,
        created_at: '2024-06-24T22:00:00',
    },{
        id: 18,
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
    // ///// supabase로부터 데이터 가져오기
    const [boards, setBoards] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 컴포넌트가 처음 마운트될 때 한 번만 실행
        const fetchBoards = async () => {
            const { data, error } = await supabase
                .from('boards_with_comment_count')
                .select('*');
            console.log('data', data);
            if (error) setError(error.message);
            else setBoards(data);
        };
        fetchBoards();
    }, []);

    useEffect(() => {
        console.log('boards', boards);
    }, [boards]);

    if (error) return <div>에러: {error}</div>;

    return (
        <section className="w-full h-auto min-h-base text-surface">
            <div className="w-full h-[55px] border-b-base flex items-center justify-end">
                <button type="button" className="w-[67px] h-full border-l-base hover:bg-primary transition duration-200 cursor-pointer fcc">
                    <img src='/assets/icons/icon-plus.svg' alt='New post' className='w-8 h-auto' />
                </button>
                <button type="button" className="w-[67px] h-full border-l-base hover:bg-primary transition duration-200 cursor-pointer fcc">
                    <img src='/assets/icons/icon-search.svg' alt='Search' className='w-7 h-auto' />
                </button>
            </div>
            <ul className="w-full h-full flex flex-wrap">
                {boards.map((board, idx) => (
                    <BoardCard
                        key={board.id}
                        idx={idx}
                        id={board.id}
                        total={BOARD_LIST.length}
                        name={board.display_name}
                        image={board.image_url}
                        title={board.title}
                        content={board.content}
                        like={board.like_count}
                        comment={board.comment_count}
                        createdAt={board.created_at}
                    />
                ))}

                {/*{BOARD_LIST.map((board, idx) => (*/}
                {/*    <BoardCard*/}
                {/*        key={board.id}*/}
                {/*        idx={idx}*/}
                {/*        id={board.id}*/}
                {/*        total={BOARD_LIST.length}*/}
                {/*        name={board.userName}*/}
                {/*        image={board.image_url}*/}
                {/*        title={board.title}*/}
                {/*        content={board.content}*/}
                {/*        like={board.likeCount}*/}
                {/*        comment={board.commentCount}*/}
                {/*        createdAt={board.created_at}*/}
                {/*    />*/}
                {/*))}*/}
            </ul>
        </section>
    )
}