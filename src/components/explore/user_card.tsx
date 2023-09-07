import React, { useState } from 'react';
import Image from 'next/image';
import { USER_PROFILE_PIC_URL } from '@/config/routes';
import { User } from '@/types';
import Link from 'next/link';
import FollowBtn from '../common/follow_btn';

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  const [noFollowers, setNoFollowers] = useState(user.noFollowers);
  return (
    <div className="w-full font-primary text-white border-[1px] border-primary_btn rounded-lg flex flex-col gap-4 px-5 py-4 transition-ease-300">
      <div className="flex items-center justify-between w-full">
        <Link className="flex items-center gap-2 w-fit" href={`/explore/user/${user.id}`}>
          <Image
            crossOrigin="anonymous"
            width={10000}
            height={10000}
            alt={'User Pic'}
            src={`${USER_PROFILE_PIC_URL}/${user.profilePic}`}
            className={'rounded-full w-14 h-14 cursor-pointer border-[1px] border-black'}
          />
          <div className="flex flex-col font-light">
            <div className="text-lg font-semibold">{user.name}</div>
            <div className="flex gap-4 text-sm">
              <div>@{user.username}</div>
              <div className="max-md:hidden">•</div>
              <div className="max-md:hidden">
                {noFollowers} Follower{noFollowers > 1 ? 's' : ''}
              </div>
            </div>
          </div>
        </Link>
        <FollowBtn toFollowID={user.id} setFollowerCount={setNoFollowers} />
      </div>
      {user.tagline && user.tagline != '' ? (
        <Link href={`/explore/user/${user.username}`} className="w-full text-sm pl-16">
          {user.tagline}
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserCard;
