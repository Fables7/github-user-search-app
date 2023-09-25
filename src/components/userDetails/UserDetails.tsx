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
    <div className="flex flex-col items-center justify-center">
      <p>{title}</p>
      <h3>{value}</h3>
    </div>
  );
};

const UserDetails = ({ repos, followers, following }: UserDetailsProps) => {
  return (
    <div className="w-full h-[85px] bg-[var(--main-light)] rounded-2xl grid grid-cols-3 px-3 mt-4">
      <DetailItem title="Repos" value={repos} />
      <DetailItem title="Followers" value={followers} />
      <DetailItem title="Following" value={following} />
    </div>
  );
};

export default UserDetails;
