import { SafeAreaView } from './styles';

interface Props {
  children: React.ReactNode;
}

export function SafeArea({ children }: Props) {
  return <SafeAreaView>{children}</SafeAreaView>;
}
