import React, { useState } from "react";
import { Box, VStack, HStack, Text, Button, Image, Input, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome, FaMoneyBillAlt, FaHistory, FaUser } from "react-icons/fa";

const Index = () => {
  const [balance, setBalance] = useState(5000);
  const [amount, setAmount] = useState("");
  const toast = useToast();

  const handleDeposit = () => {
    const depositAmount = parseFloat(amount);
    if (depositAmount > 0) {
      setBalance(balance + depositAmount);
      setAmount("");
      toast({
        title: "Deposit successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleWithdraw = () => {
    const withdrawAmount = parseFloat(amount);
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
      setBalance(balance - withdrawAmount);
      setAmount("");
      toast({
        title: "Withdrawal successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Insufficient funds",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={6}>
        <Image src="https://images.unsplash.com/photo-1536522971180-dfb1cd2e5259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5rJTIwbG9nb3xlbnwwfHx8fDE3MTA1ODQxMzV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Bank Logo" w={150} />
        <Text fontSize="2xl" fontWeight="bold">
          Welcome to Your Bank
        </Text>
        <Box p={6} borderWidth={1} borderRadius="md" w="100%" textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            Current Balance
          </Text>
          <Text fontSize="3xl" fontWeight="bold">
            ${balance.toFixed(2)}
          </Text>
        </Box>
        <HStack spacing={4}>
          <Input placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <Button colorScheme="green" onClick={handleDeposit}>
            Deposit
          </Button>
          <Button colorScheme="red" onClick={handleWithdraw}>
            Withdraw
          </Button>
        </HStack>
        <HStack spacing={8} mt={8}>
          <Link to="/">
            <VStack>
              <FaHome size={24} />
              <Text>Home</Text>
            </VStack>
          </Link>
          <Link to="/transfer">
            <VStack>
              <FaMoneyBillAlt size={24} />
              <Text>Transfer</Text>
            </VStack>
          </Link>
          <Link to="/history">
            <VStack>
              <FaHistory size={24} />
              <Text>History</Text>
            </VStack>
          </Link>
          <Link to="/profile">
            <VStack>
              <FaUser size={24} />
              <Text>Profile</Text>
            </VStack>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
