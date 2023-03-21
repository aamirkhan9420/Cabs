import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react"

 export function ShowDescription() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle}>Click Me</Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p='40px'
            color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ad quas architecto animi, 
            aliquid saepe est placeat quo officia itaque ut quos expedita quasi eum,
             soluta nihil ullam harum quae sit nemo dolores? Rerum quod aperiam neque accusamus fuga voluptates velit? Id, 
            tempora! Libero accusantium provident cupiditate, autem blanditiis soluta?
          </Box>
        </Collapse>
      </>
    )
  }