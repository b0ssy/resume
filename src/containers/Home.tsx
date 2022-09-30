import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import grey from '@mui/material/colors/grey';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {

  function buildSkill(skill: string, conf: number) {
    return (
      <Stack
        direction='row'
        alignItems='center'
      >
        <Box
          sx={{
            width: '50%',
          }}
        >
          <Typography
            variant='subtitle1'
          >
            {skill}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '50%',
          }}
        >
          <LinearProgress
            variant='determinate'
            value={conf}
            sx={{
              height: '8px',
              borderRadius: '16px',
            }}
          />
        </Box>
      </Stack>
    );
  }

  return (
    <Box
      sx={{
        height: '100%',
        bgcolor: 'background.default',
      }}
    >
      <Box
        sx={{
          height: '200px',
          bgcolor: grey[200],
        }}
      >
        <Container
          maxWidth='md'
        >
          <Typography
            variant='h3'
            color='textPrimary'
            textAlign='center'
            sx={{
              paddingTop: '54px',
            }}
          >
            Chia Yong Sheng
          </Typography>
          <Typography
            variant='h6'
            color='textPrimary'
            textAlign='center'
          >
            a full stack engineer
          </Typography>
        </Container>
      </Box>
      <Box
        sx={{
          bgcolor: grey[100],
          padding: '8px 0',
        }}
      >
        <Container
          maxWidth='md'
        >
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='center'
            spacing={2}
          >
            <Stack
              direction='row'
              alignItems='center'
              spacing={0.5}
            >
              <PhoneIcon />
              <Typography
                variant='subtitle1'
                color='textPrimary'
              >
                91551589
              </Typography>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              spacing={0.5}
            >
              <EmailIcon />
              <Typography
                variant='subtitle1'
                color='textPrimary'
              >
                superbos88@hotmail.com
              </Typography>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              spacing={0.5}
            >
              <LinkedInIcon />
              <Typography
                variant='subtitle1'
                color='textPrimary'
              >
                https://www.linkedin.com/in/yong-sheng-chia-8b7008148/
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container
        maxWidth='md'
        sx={{
          bgcolor: 'white',
        }}
      >
        <Stack
          direction='row'
          sx={{
            padding: '24px 24px 48px 24px',
          }}
        >
          <Box
            sx={{
              width: 'calc(100% / 3 * 2)',
              paddingRight: '32px', 
            }}
          >
            <Typography
              variant='h5'
              fontWeight='bold'
              sx={{
                paddingBottom: '8px',
              }}
            >
              Experience
            </Typography>
            <Typography
              fontWeight='bold'
            >
              Littlefires.io. Pte. Ltd.
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{
                fontStyle: 'italic',
              }}
            >
              Sep 2022 - Present
            </Typography>
            <Typography
              variant='subtitle1'
              sx={{
                paddingTop: '8px',
              }}
            >
              Assist CTO in building backend system and frontend user interface.
            </Typography>

            <Typography
              fontWeight='bold'
              sx={{
                paddingTop: '32px',
              }}
            >
              Personal Projects
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{
                fontStyle: 'italic',
              }}
            >
              Nov 2021 - Sep 2022
            </Typography>
            <Typography
              variant='subtitle1'
              sx={{
                paddingTop: '8px',
              }}
            >
              Developed a Flutter mobile application to check bus arrival timings.
            </Typography>
            <Link
              href='https://play.google.com/store/apps/details?id=com.sgbusapp.sgbusapp_flutter'
              sx={{
                fontSize: '14px',
              }}
            >
              https://play.google.com/store/apps/details?id=com.sgbusapp.sgbusapp_flutter
            </Link>
            <Typography
              variant='subtitle1'
              sx={{
                paddingTop: '8px',
              }}
            >
              Developed a Flutter mobile application to calculate a person's lifetime luck via Chinese Metaphysical 8 characters (BaZi).
              The mobile application communicates with a backend Python web server which contains the core computation logic.
              The backend web server is hosted at home using dynamic DNS.
            </Typography>

            <Typography
              fontWeight='bold'
              sx={{
                paddingTop: '32px',
              }}
            >
              DSO National Laboratories
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{
                fontStyle: 'italic',
              }}
            >
              Apr 2014 - Nov 2021
            </Typography>
            <Typography
              variant='subtitle1'
              sx={{
                paddingTop: '8px',
              }}
            >
              Developed a system that ingests images and run algorithms to detect objects for users to visualize.
              The backend is a webserver based on JavaScript running on NodeJS with MongoDB as the NoSQL database.
              Algorithms are integrated with the backend webserver as Python modules.
              The frontend is developed with React as the core framework utilizing JavaScript/HTML/CSS.
            </Typography>
            <Typography
              variant='subtitle1'
              sx={{
                paddingTop: '8px',
              }}
            >
              Administered a prototype Kubernetes GPU cluster with 4 CentOS 7 nodes, each node having 8 NVIDIA GPUs each.
              Assisted users in deploying machine learning algorithms on the cluster as well as troubleshooting occasional issues.
            </Typography>
            <Typography
              variant='subtitle1'
              sx={{
                paddingTop: '8px',
              }}
            >
              Implemented a monitoring system that runs continuously 24/7 in an Intel NUC system to detect objects.
              The core engine is developed as Qt C++ desktop application with image processing algorithms using OpenCV library.
              There are also frontends that consist of an Android Java mobile application and a simple web interface using jQuery/HTML/CSS.
            </Typography>
            <Typography
              variant='subtitle1'
              sx={{
                paddingTop: '8px',
              }}
            >
              Took over development of legacy C++ Windows MFC project.
              Integrated a 3D map into the user interface using OpenSceneGraph library.
            </Typography>
          </Box>
          <Box
            sx={{
              width: 'calc(100% / 3)',
              padding: '0 8px',
            }}
          >
            <Typography
              variant='h5'
              fontWeight='bold'
              sx={{
                paddingBottom: '8px',
              }}
            >
              Languages
            </Typography>
            {buildSkill('TypeScript', 100)}
            {buildSkill('JavaScript', 100)}
            {buildSkill('Python', 85)}
            {buildSkill('C/C++', 80)}
            {buildSkill('Java', 75)}
            {buildSkill('Dart', 70)}
            <Typography
              variant='h5'
              fontWeight='bold'
              sx={{
                paddingTop: '16px',
                paddingBottom: '8px',
              }}
            >
              Frontends
            </Typography>
            {buildSkill('React', 100)}
            {buildSkill('Flutter', 85)}
            {buildSkill('Android (Java)', 70)}
            {buildSkill('Qt', 70)}
            <Typography
              variant='h5'
              fontWeight='bold'
              sx={{
                paddingTop: '16px',
                paddingBottom: '8px',
              }}
            >
              Databases
            </Typography>
            {buildSkill('MongoDB', 90)}
            {buildSkill('PostgreSQL', 80)}
            <Typography
              variant='h5'
              fontWeight='bold'
              sx={{
                paddingTop: '16px',
                paddingBottom: '8px',
              }}
            >
              Supporting Tools
            </Typography>
            {buildSkill('Git', 100)}
            {buildSkill('Docker', 95)}
            {buildSkill('CMake', 80)}
            {buildSkill('ZeroMQ', 75)}
            {buildSkill('OpenCV', 75)}
            {buildSkill('Kubernetes', 70)}
            {buildSkill('OpenSceneGraph', 60)}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
