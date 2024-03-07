import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon } from './styles';

interface ButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  danger?: boolean;
}

export function ButtonIcon({ icon, danger, ...rest }: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} danger={danger} />
    </Container>
  );
}
