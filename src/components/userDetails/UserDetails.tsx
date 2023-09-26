interface UserDetailsProps {
  repos: number;
  followers: number;
  following: number;
}

interface DetailItemProps {
  title: string;
  value: number;
}

const DetailItem = ({ title, value }: DetailItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center md:items-start md:pl-4">
      <p className="text-[0.688rem] md:text-[0.813rem]">{title}</p>
      <h3 className="text-[var(--dark-gray)]">{value}</h3>
    </div>
  );
};

const UserDetails = ({ repos, followers, following }: UserDetailsProps) => {
  return (
    <div className="w-full h-[85px] bg-[var(--main-light)] dark:bg-[var(--main-dark)] rounded-2xl grid grid-cols-3 px-3 my-6">
      <DetailItem title="Repos" value={repos} />
      <DetailItem title="Followers" value={followers} />
      <DetailItem title="Following" value={following} />
    </div>
  );
};

export default UserDetails;
