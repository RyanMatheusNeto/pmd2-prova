
import { ScrollView } from 'react-native';
import { Box, Text, Checkbox, Icon, Input, InputField,
CheckboxIndicator, CheckboxIcon, CheckboxLabel, CheckIcon, 
CalendarDaysIcon, RemoveIcon, ChevronDownIcon, TrashIcon, HelpCircleIcon, ThreeDotsIcon, MenuIcon, InfoIcon, BellIcon } from '@gluestack-ui/themed';

export const Home = () => {
    return <Container />
}



  
  const FeatureCard = ({ iconSvg: name, desc, numero, Data, total}: any) => {
    return (

        
        

      <Box
        
        width="100%"
        borderWidth={1}
        borderColor="$black"
        m="$2"
        p="$4"
        rounded="$md"
        flexDirection="row"
      >
        <Box>
        
        <Checkbox value='0'>
            <CheckboxIndicator mr="$1">
              <CheckboxIcon as={CheckIcon}/>
            </CheckboxIndicator>
          </Checkbox>
        </Box>
        
       
        
        <Box id='direito'alignItems="flex-start" display="flex" flexDirection="column">

        

        <Text  fontSize={20} color="$black" fontWeight="500" ml="$2" paddingBottom={10}>
          {numero}
        </Text>

        <Text fontSize={12} color="$black" fontWeight="500" ml="$2">
          {desc}
        </Text>

        </Box>

        

        <Box id='esquerdo' alignItems="flex-end"  flexDirection="column" >

        <Text color="$black" mt="$2" paddingBottom={10}>
          {Data}
        </Text>
        <Text  fontSize={15} color="$black" fontWeight="700" ml="$2">
          {total}
        </Text>

        </Box>
      </Box>      
    );
  };
  
  const Container = () => {
    return (
      <Box flex={1} backgroundColor="white">
        <ScrollView
          style={{ height: '100%' }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Box
            position="absolute"
            sx={{
              '@base': {
                h: 500,
                w: 500,
              },
              '@lg': {
                h: 700,
                w: 700,
              },
            }}
          >
          </Box>

          <Box
          backgroundColor='$backgroundDark100'
          flexDirection='row'
          height={50}
          padding={10}
            >
                <Icon as={MenuIcon} size="md" paddingRight={250}/>
                <Icon as={BellIcon} size="md" paddingRight={10}/>
                <Icon as={HelpCircleIcon} size="md" paddingRight={10}/>
                <Icon as={ThreeDotsIcon} size="md" paddingRight={10}/>
            </Box>

           
        <Box
            py="$2"
            px="$6"
            alignItems="flex-start"
            
            sx={{
              '@base': {
                flexDirection: 'column',
              },
              '@sm': {
                flexDirection: 'row',
              },
              '@md': {alignSelf: 'flex-start'},
            }}>
            <Text color="$black" fontWeight="$800" fontSize={30}>
              Pedidos de Vendas
            </Text>

            </Box>


            <Box
            py="$2"
            px="$6"
           rounded="$full"
            alignItems="flex-start"
            sx={{
              '@base': {
                flexDirection: 'row',
              },
              '@sm': {
                flexDirection: 'row',
              },
              '@md': {alignSelf: 'flex-start'},
            }}>
            <Text color="$green" fontWeight="$700">
              Todas as lojas
            </Text>
            <Icon as={ChevronDownIcon} m="$2" w="$4" h="$4" />
            
          </Box>

          <Box paddingTop={10}>
            
        <Input variant="outline" size="sm"   padding={10}>
          <InputField
              placeholder='Pesquise por nome'
          />
        </Input>

        <Box
        paddingLeft={5}
            paddingTop={5}>
        <Checkbox value='0'>
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon}/>
            </CheckboxIndicator>
            <CheckboxLabel>Selecionar todos</CheckboxLabel>
          </Checkbox>
        </Box>
            <Box
            flexDirection='row-reverse'
            paddingRight={10}
                >
                <Icon as={TrashIcon} size="md" color="red" />
                <Icon as={CalendarDaysIcon}  size="md" color="green"/>
            </Box>
        
        

          </Box>
          <Box
            height="60%"
            sx={{
              '@base': {
                my: '$16',
                mx: '$5',
                height: '80%',
              },
              '@lg': {
                my: '$24',
                mx: '$32',
              },
            }}
            justifyContent='space-around'
            alignItems="flex-start"
          >
            


            

            <Box
              sx={{
                '@base': {
                  flexDirection: 'column',
                },
                '@md': {
                  flexDirection: 'column',
                },
              }}
            >
                
              <FeatureCard
                numero ="Número: 19491"
                desc="Cliente: Consumidor Final"
                Data="23/09/2023"
                total="Total(R$): 150,00"
              />
              <FeatureCard
                numero ="Número: 19491"
                desc="Cliente: Consumidor Final"
                Data="23/09/2023"
                total="Total(R$): 150,00"
              />
              <FeatureCard
                numero ="Número: 19491"
                desc="Cliente: Consumidor Final"
                Data="23/09/2023"
                total="Total(R$): 150,00"
              />
              <FeatureCard
                numero ="Número: 19491"
                desc="Cliente: Consumidor Final"
                Data="23/09/2023"
                total="Total(R$): 150,00"
              />
              <FeatureCard
                numero ="Número: 19491"
                desc="Cliente: Consumidor Final"
                Data="23/09/2023"
                total="Total(R$): 150,00"
              />
              <FeatureCard
                numero ="Número: 19491"
                desc="Cliente: Consumidor Final"
                Data="23/09/2023"
                total="Total(R$): 150,00"
              />
            </Box>
          </Box>

          
        </ScrollView>
      </Box>
    );
  };