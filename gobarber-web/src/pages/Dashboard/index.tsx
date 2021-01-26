import React from 'react';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Calendar,
} from './styles';
import logo from '../../assets/logo.svg';
import { FiPower, FiClock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () =>  {

  const { signOut, user } = useAuth();

  return (
    <Container>
    <Header>
      <HeaderContent>
        <img src={logo} alt="GoBarber" />

        <Profile>
          <img
            src={user.avatar_url}
            alt={user.name}
          />
          <div>
            <span>Bem-vindo,</span>
            <strong>{user.name}</strong>
          </div>
        </Profile>

        <button type="button" onClick={signOut} >
          <FiPower />
        </button>

      </HeaderContent>

    </Header>

    <Content>
      <Schedule>
        <h1>Horários agendados</h1>
        <p>
          <span>Hoje</span>
          <span>Dia 6</span>
          <span>Segunda-feira</span>
        </p>

        <NextAppointment>
          <strong>Atendimento a seguir</strong>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/23425156?s=460&u=63624331eb568edabe02c3f12b010b1edb1bb66b&v=4"
              alt=""
            />

            <strong>LArissa santin</strong>

            <span>
              <FiClock />
              0932
            </span>
          </div>
        </NextAppointment>
      </Schedule>
      <Calendar />
    </Content>
  </Container>
  );
}

export default Dashboard;
