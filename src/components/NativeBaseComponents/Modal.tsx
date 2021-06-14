import React from 'react';
import { Box, HStack, VStack, Divider } from 'native-base';

export const Example = () => {
	return (
		<VStack
			w="80%"
			rounded="md"
			_light={{
				bg: 'orange.50',
			}}
			_dark={{
				bg: 'blueGray.600',
			}}
			space={4}
			p={4}
			justifyContent="center"
		>
			<Box
				_light={{
					bg: 'gray.600',
				}}
				_dark={{
					bg: 'gray.100',
				}}
				rounded="sm"
				h="11px"
				w="50%"
			/>
			<VStack space={1}>
				<Box
					_light={{
						bg: 'gray.600',
					}}
					_dark={{
						bg: 'gray.100',
					}}
					h="7px"
					rounded="pill"
					w="90%"
				/>

				<Box
					_light={{
						bg: 'gray.600',
					}}
					_dark={{
						bg: 'gray.100',
					}}
					h="7px"
					rounded="pill"
					w="100%"
				/>

				<Box
					_light={{
						bg: 'gray.600',
					}}
					_dark={{
						bg: 'gray.100',
					}}
					h="7px"
					rounded="pill"
					w="96%"
				/>
			</VStack>

			<Box
				// _text={{ color: 'white' }}
				p={2}
				px={3}
				rounded="lg"
				_light={{
					bg: 'orange.300',
				}}
				_dark={{
					bg: 'orange.400',
				}}
				position="relative"
				overflow="hidden"
				w="70%"
			>
				<Box
					_light={{
						bg: 'orange.500',
					}}
					_dark={{
						bg: 'orange.700',
					}}
					rounded="full"
					size={20}
					right="-32"
					top="-10"
					opacity={0.6}
					zIndex={-1}
					position="absolute"
				/>
				<Box
					_light={{
						bg: 'gray.600',
					}}
					_dark={{
						bg: 'gray.100',
					}}
					rounded="pill"
					h="7px"
				/>
			</Box>
		</VStack>
	);
};
